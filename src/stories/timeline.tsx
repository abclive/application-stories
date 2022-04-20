import DocExperience from "./content/DocExperience";
import Greet from "./content/Greet";
import Intro from './content/Intro';
import Studies from "./content/Education";
import CollectiveExperience from "./content/CollectiveExperience";
import Summary from "./content/Summary";
import CodeReview from "./content/CodeReview";
import Contact from "./content/Contact";
import Projects from "./content/Projects";

export const stories = [
    {component: <Greet/>, time: 15},
    {component: <Intro/>, time: 15},
    {component: <Studies/>, time: 15},
    {component: <DocExperience/>, time: 15},
    {component: <CollectiveExperience/>, time: 15},
    {component: <Projects/>, time: 18},
    {component: <Summary/>, time: 11},
    {component: <CodeReview/>, time: 9},
    {component: <Contact/>, time: 20}
];