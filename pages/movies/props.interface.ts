interface ICastMember {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

export interface IPageProps {
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
