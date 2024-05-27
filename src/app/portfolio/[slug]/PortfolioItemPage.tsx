'use client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Asset from 'src/components/Asset';
import { ProjectList } from 'src/types/project';
import { motion } from 'framer-motion';

const transition = {
  type: 'spring',
  stiffness: 300,
  mass: 3,
  damping: 100
};

const initial = {
  y: 150,
  opacity: 0.001
};

const inView = {
  y: 0,
  opacity: 1,
  transition
};

export default function PortfolioItemPage({ projectList }: { projectList: ProjectList }) {
  const [project] = projectList.items;

  return (
    <>
      {documentToReactComponents(project.fields.page, {
        renderNode: {
          [INLINES.HYPERLINK]: (node, children) => (
            <motion.a
              href={node.data.uri}
              target="_blank"
              rel="noopener noreferrer"
              initial={initial}
              whileInView={inView}
              viewport={{ once: true }}
            >
              {children}
            </motion.a>
          ),
          [BLOCKS.HEADING_1]: (_, children) => (
            <motion.h1
              className="text-5xl font-semibold leading-[58px] text-white md:w-[700px] lg:w-[800px]"
              initial={initial}
              whileInView={inView}
              viewport={{ once: true }}
            >
              {children}
            </motion.h1>
          ),
          [BLOCKS.HEADING_2]: (_, children) => (
            <motion.h2
              className="text-2xl font-semibold text-white md:w-[700px] lg:w-[800px]"
              initial={initial}
              whileInView={inView}
              viewport={{ once: true }}
            >
              {children}
            </motion.h2>
          ),
          [BLOCKS.HEADING_3]: (_, children) => (
            <motion.h3
              className="font-medium text-white/50 md:w-[700px] lg:w-[800px]"
              initial={initial}
              whileInView={inView}
              viewport={{ once: true }}
            >
              {children}
            </motion.h3>
          ),
          [BLOCKS.PARAGRAPH]: (_, children) => {
            if (Array.isArray(children) && children[0] === '') {
              return <></>;
            }
            return (
              <motion.p
                className="text-white/50 md:w-[700px] lg:w-[800px]"
                initial={initial}
                whileInView={inView}
                viewport={{ once: true }}
              >
                {children}
              </motion.p>
            );
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
    </>
  );
}
