const DeletionOption = {
  DELETE_ALL: "delete_all" as const,
};
export type DeletionOption =
  (typeof DeletionOption)[keyof typeof DeletionOption];
