export interface IMetaProps {
  title: string;
  description: string;
}

export interface IProps {
  children?: React.ReactNode;
  metaProps: IMetaProps;
}
