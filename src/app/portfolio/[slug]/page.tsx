import { getEntries } from 'src/api';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Asset from 'src/components/Asset';

async function getSpecificProject(slug: string) {
  const { data: projectList } = await getEntries(`fields.slug=${slug}&include=1`);

  return projectList;
}

export default async function Projects({ params }: { params: { slug: string } }) {
  const projectList = await getSpecificProject(params.slug);
  const [project] = projectList.items;

  return (
    <>
      <main className="flex max-w-8xl flex-col items-center gap-6 px-5 text-white md:pt-20 2xl:px-0">
        <div className="mb-8 flex flex-col items-center gap-3 pt-24">
          <h2 className="text-[64px] font-semibold leading-[74px]">{project.fields.subtitle}</h2>
          <p className="font-medium text-white/50">{project.fields.title}</p>
        </div>
        {documentToReactComponents(project.fields.page, {
          renderNode: {
            [INLINES.HYPERLINK]: (node, children) => (
              <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
            [BLOCKS.HEADING_1]: (_, children) => (
              <h1 className="text-5xl font-semibold leading-[58px] text-white md:w-[700px] lg:w-[800px]">
                {children}
              </h1>
            ),
            [BLOCKS.HEADING_2]: (_, children) => (
              <h2 className="text-2xl font-semibold text-white md:w-[700px] lg:w-[800px]">
                {children}
              </h2>
            ),
            [BLOCKS.HEADING_3]: (_, children) => (
              <h3 className="font-medium text-white/50 md:w-[700px] lg:w-[800px]">{children}</h3>
            ),
            [BLOCKS.PARAGRAPH]: (_, children) => {
              if (Array.isArray(children) && children[0] === '') {
                return <></>;
              }
              return <p className="text-white/50 md:w-[700px] lg:w-[800px]">{children}</p>;
            },
            [BLOCKS.HR]: () => (
              <hr
                style={{
                  width: '100%',
                  borderColor: 'rgb(23, 23, 23)',
                  margin: '24px 0'
                }}
              />
            ),
            [BLOCKS.UL_LIST]: (_, children) => <ul>{children}</ul>,
            [BLOCKS.QUOTE]: (_, children) => <blockquote>{children}</blockquote>,
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
              const id = node.data.target.sys.id;
              const currentIndex = project.fields.page.content.findIndex(
                (item) => item.data?.target?.sys?.id === id
              );

              const currentItem = projectList.includes.Asset.find((item) => item.sys.id === id);

              const tagArray = currentItem?.metadata?.tags.map(({ sys }) => sys.id);

              const isMobile = tagArray?.includes?.('mobile');

              let hasNextAsset = false;

              for (let i = currentIndex + 1; i < project.fields.page.content.length; i++) {
                const item = project.fields.page.content[i];
                if (item.nodeType === 'embedded-asset-block') {
                  const asset = projectList.includes.Asset.find(
                    (a) => a.sys.id === item?.data?.target?.sys?.id
                  );

                  const tagArray = asset?.metadata?.tags.map(({ sys }) => sys.id);

                  const isNextMobile = tagArray?.includes?.('mobile');

                  if ((isMobile && isNextMobile) || (!isMobile && !isNextMobile)) {
                    hasNextAsset = true;
                    break;
                  }

                  continue;
                }
                break;
              }

              return <Asset id={id} list={projectList.includes.Asset} isNextAsset={hasNextAsset} />;
            }
          }
        })}
      </main>
    </>
  );
}
