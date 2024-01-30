export interface ICat {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: string[];
}

export interface catsSliceT {
  isLoading: boolean;
  isError: boolean;
  cats: ICat[];
}
