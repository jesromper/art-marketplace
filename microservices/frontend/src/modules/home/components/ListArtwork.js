import {Container} from "reactstrap";
import {ArtworkThumbnail} from "./ArtworkThumbnail";


export function ListArtwork({artworks}){
  return <Container className='grid-container py-5'>
      {artworks.map(artwork => <ArtworkThumbnail key={artwork.id} artwork={artwork} />)}
  </Container>;
}