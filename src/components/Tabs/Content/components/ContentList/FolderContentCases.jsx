import { t } from "i18next";
import React from "react";
import styles from "../../styles/ContentList.module.scss";

const FolderContentCases = ({ content }) => {
  return (
    <React.Fragment>
      {content?.resources && (
        <div className={styles.contentList__item__content__folderDetails}>
          {content?.resources?.videos != 0 && (
            <React.Fragment>
              {" "}
              <span>{content?.resources?.videos}</span>{" "}
              {t(
                "components.tabs.content.components.contentList.folderContentCases.videosText",
                "video(s)"
              )}
              {content?.resources?.files || content?.resources?.tests
                ? ", "
                : ""}
            </React.Fragment>
          )}
          {content?.resources?.files != 0 && (
            <React.Fragment>
              {" "}
              <span>{content?.resources?.files}</span>{" "}
              {t(
                "components.tabs.content.components.contentList.folderContentCases.filesText",
                "file(s)"
              )}
              {content?.resources?.tests ? " ," : ""}
            </React.Fragment>
          )}
          {content?.resources?.tests != 0 && (
            <React.Fragment>
              {" "}
              <span>{content?.resources?.tests}</span>{" "}
              {t(
                "components.tabs.content.components.contentList.folderContentCases.testsText",
                "test(s)"
              )}{" "}
            </React.Fragment>
          )}
        </div>
      )}
      {content?.tag?.text && (
        <div
          className={styles.contentList__item__content__freeContentEmblem}
          style={{
            background: content?.tag?.bgColor,
            color: content?.tag?.color,
          }}
        >
          {content?.tag?.text}
        </div>
      )}
    </React.Fragment>
  );
};

export default FolderContentCases;
