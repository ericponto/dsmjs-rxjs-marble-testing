// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  Table,
  TableRow,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  ComponentPlayground
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

import MarbleDrawer from "./MarbleDrawer";

// Import image preloader util
// import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import { themeFonts, themeColors } from "./theme";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


// const images = {
//   city: require("../assets/city.jpg"),
//   kat: require("../assets/kat.png"),
//   logo: require("../assets/formidable-logo.svg"),
//   markdown: require("../assets/markdown.png")
// };

// preloader(images);

const theme = createTheme(themeColors, themeFonts);
theme.screen.components.heading.h1.fontWeight = 300;
theme.screen.components.heading.h3.fontWeight = 400;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={500} theme={theme} controls={false} progress={"none"}>
        <Slide>
          <Heading textAlign="left">Marble Testing with RxJS</Heading>
          <Heading size="3" textAlign="left" textColor="text">Eric Ponto</Heading>
          <Text textAlign="left">
            <Link href="https://slides.ericponto.com/dsmjs-rxjs-marble-tests" textColor="red">slides.ericponto.com/dsmjs-rxjs-marble-tests</Link>
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading textColor="text">Learning RxJS is hard</Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading textColor="text">Learning when to use RxJS is hard, too</Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading textColor="text"><strong>Testing</strong> RxJS is...yeah, also hard</Heading>
        </Slide>
        <Slide bgColor="white">
          <Heading textColor="primaryDark" textAlign="left">Luckily there is a tool that can help us</Heading>
        </Slide>
        <Slide>
          <Heading margin="0 0 0.5em">ASCII Marble Diagrams</Heading>
          <MarbleDrawer text="---F---T---W---" />
        </Slide>
        <Slide bgColor="red">
          <Heading fit>But first...what is <strong>RxJS</strong>?</Heading>
        </Slide>
        <Slide bgColor="white">
          <Heading textColor="red" fit margin="0 0 0.5em">General Theory of Reactivity</Heading>
          <Table textColor="text">
            <TableHeader>
              <TableRow>
                <TableHeaderItem></TableHeaderItem>
                <TableHeaderItem>Singular</TableHeaderItem>
                <TableHeaderItem>Plural</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHeaderItem>Spactial</TableHeaderItem>
                <TableItem>Value</TableItem>
                <TableItem>Array/Iterable</TableItem>
              </TableRow>
              <TableRow>
                <TableHeaderItem>Temporal</TableHeaderItem>
                <TableItem>Promise</TableItem>
                <TableItem textColor="primaryDark"><em>Observable</em></TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../examples/value.example")}
          ranges={[
            { loc: [0, 3], title: "Values" },
            { loc: [0, 1] },
            { loc: [1, 2] },
            { loc: [2, 3] },
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../examples/array.example")}
          ranges={[
            { loc: [0, 3], title: "Arrays" },
            { loc: [0, 1] },
            { loc: [1, 2], note: "[1, 4, 9, 16, 25]" },
            { loc: [2, 3], note: "[1, 9, 25]" },
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../examples/promise.example")}
          ranges={[
            { loc: [0, 13], title: "Promises" },
            { loc: [0, 1] },
            { loc: [1, 4] },
            { loc: [5, 7] },
            { loc: [9, 13] },
            { loc: [10, 11], note: "hi" },
            { loc: [11, 12] },
          ]}
        />
        <Slide bgColor="red">
          <Text textColor="white">An Observable is like a Promise that you can resolve multiple times</Text>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../examples/observable.example")}
          ranges={[
            { loc: [0, 18], title: "Observable" },
            { loc: [0, 1] },
            { loc: [1, 5] },
            { loc: [3, 4] },
            { loc: [6, 8] },
            { loc: [9, 11] },
            { loc: [13, 18] },
            { loc: [14, 15], note: "0---1---2---3---4---" },
            { loc: [15, 16] },
            { loc: [16, 17] },
          ]}
        />
        <Slide>
          <MarbleDrawer text="0---1---2---3---4---" />
        </Slide>
        <Slide bgColor="red">
          <Text textColor="white">An Observable is like an Array who's values are separated by time</Text>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../examples/observable-like-array.example")}
          ranges={[
            { loc: [0, 3], title: "RxJS Observables" },
            { loc: [0, 1] },
            { loc: [1, 2], note: "[1, 4, 9, 16, 25]" },
            { loc: [2, 3], note: "[1, 9, 25]" },
          ]}
        />
        <Slide bgColor="white">
          <MarbleDrawer text="0---1---2---3---4---" />
          <Text margin="1em 0" textColor="primary">map(x => x * x)</Text>
          <MarbleDrawer text="0---1---4---9---16--" />
          <Text margin="1em 0" textColor="primary">filter(x => x % 2)</Text>
          <MarbleDrawer text="0---1-------9-------" />
        </Slide>
        <Slide>
          <Heading>Marble diagrams for everything!</Heading>
        </Slide>
        <Slide bgColor="white">
          <Heading fit textColor="primaryDark" margin="0 0 0.5em">Marble diagram syntax</Heading>
          <Table textColor="text">
            <TableBody>
              <TableRow style={{borderBottom: "1px solid #333"}}>
                <TableHeaderItem textColor="red" padding="0 1em 0 0" textFont="monospace">-</TableHeaderItem>
                <TableItem textAlign="left">A unit of time passing (1 unit of time is considered 10 "frames")</TableItem>
              </TableRow>
              <TableRow style={{borderBottom: "1px solid #333"}}>
                <TableHeaderItem textColor="red" padding="0 1em 0 0" textFont="monospace">a</TableHeaderItem>
                <TableItem textAlign="left">A value emitted (which can be mapped to another value)</TableItem>
              </TableRow>
              <TableRow style={{borderBottom: "1px solid #333"}}>
                <TableHeaderItem textColor="red" padding="0 1em 0 0" textFont="monospace">|</TableHeaderItem>
                <TableItem textAlign="left">The end of the stream</TableItem>
              </TableRow>
              <TableRow style={{borderBottom: "1px solid #333"}}>
                <TableHeaderItem textColor="red" padding="0 1em 0 0" textFont="monospace">#</TableHeaderItem>
                <TableItem textAlign="left">An error</TableItem>
              </TableRow>
              <TableRow style={{borderBottom: "1px solid #333"}}>
                <TableHeaderItem textColor="red" padding="0 1em 0 0" textFont="monospace">^</TableHeaderItem>
                <TableItem textAlign="left">The subscription point</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide bgColor="red">
          <Heading>Let's build an app</Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading textColor="primaryDark">Requirements</Heading>
          <List textColor="text">
            <ListItem>It has an up button, a down button, and a count.</ListItem>
            <ListItem>The count starts at 0.</ListItem>
            <ListItem>When you click the up button it adds 1 to the count.</ListItem>
            <ListItem>When you click the down button it subtracts 1 from the count.</ListItem>
          </List>
        </Slide>
        <Slide bgColor="white">
          <Text margin="1em 0" textColor="primary">up button clicks</Text>
          <MarbleDrawer text="---x------x----x-----" />
          <Text margin="1em 0" textColor="primary">down button clicks</Text>
          <MarbleDrawer text="------x-----------x--" />
          <Text margin="1em 0" textColor="primary">count</Text>
          <MarbleDrawer text="0--1--0---1----2--1--" />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../examples/marble-test.example")}
          ranges={[
            { loc: [0, 28], title: "Marble Tests" },
            { loc: [0, 1] },
            { loc: [1, 4] },
            { loc: [2, 3] },
            { loc: [5, 8] },
            { loc: [9, 14] },
            { loc: [15, 19] },
            { loc: [20, 21] },
            { loc: [22, 25] },
            { loc: [26, 27] },
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../examples/app.example")}
          ranges={[
            { loc: [0, 37], title: "The App" },
            { loc: [0, 8] },
            { loc: [9, 17] },
            { loc: [18, 20] },
            { loc: [21, 26] },
            { loc: [27, 28] },
            { loc: [28, 29] },
            { loc: [30, 37] },
          ]}
        />
        <Slide>
          <MarbleDrawer text="---T---H---E---E---N---D---" />
        </Slide>
      </Deck>
    );
  }
}
