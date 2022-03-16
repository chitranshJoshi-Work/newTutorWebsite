export const transformParentFolder = (folder) => {
  return {
    ...folder,
    folderId: folder?.isRoot ? 0 : folder?.folderId,
  };
};
