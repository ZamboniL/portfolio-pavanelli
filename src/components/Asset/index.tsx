import styles from "./Asset.module.css";
import { AssetDetails } from "../../types/project";
import ProjectImage from "../ProjectImage";

interface AssetProps {
  id: string;
  list: AssetDetails[];
}

const Asset = ({ id, list }: AssetProps) => {
  const asset = list.find((item) => item.sys.id === id);

  if (!asset) return <></>;

  const url = asset.fields.file.url.replace("//", "https://") || "";
  const type = asset.fields.file.contentType;

  if (type === "video/mp4") {
    return (
      <div className={styles.container}>
        <span
          className={styles.banner}
          style={{ background: asset?.fields.description }}
        />
        <video style={{ width: "100%" }} controls src={url} />
      </div>
    );
  }
  const height = asset.fields.file.details.image?.height || 0;
  const width = asset.fields.file.details.image?.width || 0;
  const tags = asset.metadata.tags;
  const tagArray = tags.map(({ sys }) => sys.id);

  const isMobile = tagArray.includes("desktop");
  const isDesktop = tagArray.includes("mobile");
  const isFootnote = tagArray.includes("footnote");

  const containerClasses = `${styles.container} ${
    isMobile ? styles.mobile : ""
  } ${isDesktop ? styles.desktop : ""} ${isFootnote ? styles.footnote : ""}`;

  return (
    <div className={containerClasses}>
      <span
        className={styles.banner}
        style={{ background: asset?.fields.description }}
      />
      <ProjectImage
        width={width}
        height={height}
        src={url}
        alt={asset?.fields.title}
      />
    </div>
  );
};

export default Asset;
