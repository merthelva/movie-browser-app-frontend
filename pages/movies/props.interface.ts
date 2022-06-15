interface ICastMember {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

export interface IContentProps {
  isLoading: boolean;
}

export interface IPageProps {
  id: number | string;
  coverImageSrc: string;
  budget: string;
  overview: string;
  releaseDate: string;
  duration: string;
  title: string;
  rate: number;
  imageGallery: string[];
  movieCast: ICastMember[];
}
