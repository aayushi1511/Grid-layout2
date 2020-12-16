import "./App.css";
import Grid from "@material-ui/core/Grid";
import LeftNavigation from "./components/atoms/LeftNavigation";
import { GenreList } from "./components/molecules/GenreList";
import { MiddleContent } from "./components/molecules/MiddleContent";
import { FeaturedList } from "./components/molecules/FeaturedList";
import collections from "./assets/collections";

function App() {
  return (
    <div className="App">
      <LeftNavigation />
      <Grid
        item
        container
        direction="column"
        // justify="flex-start"
        // alignItems="flex-start"
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
      </Grid>
    </div>
  );
}

export default App;
