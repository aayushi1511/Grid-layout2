import Grid from "@material-ui/core/Grid";
import LeftNav from "../LeftNav";
import { GenreList } from "../../molecules/GenreList";
import { MiddleContent } from "../../molecules/MiddleContent";
import { FeaturedList } from "../../molecules/FeaturedList";
import { CompetitiveList } from "../../molecules/CompetitiveList";
import collections from "../../../assets/collections";
import nextCollection from "../../../assets/secondCollection";


function Content() {
  return (
    <div className="App">
      <LeftNav />
      <Grid
        item
        container
        direction="column"
      >
        <GenreList />
        <MiddleContent
          title="Playlist Title That Spans Two Lines"
          description="Short series description that can span two lines and be 80 characters and stuff."
        />
        <FeaturedList
          heading="Featured Collections"
          collections={collections}
        />
        <CompetitiveList
          heading="Competitive Cooking"
          collections={nextCollection}
        />
      </Grid>
    </div>
  );
}

export default Content;
