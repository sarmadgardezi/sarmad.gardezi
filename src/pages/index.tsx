import Hero from "@/components/hero";
import PageTransition from "@/components/PageTransition";
import CoursesSection from "@/components/courses-section";
import courses from "@/src/data/courses";
import VideosSection from "@/components/videos-section";
import Testimonial from "@/components/testimonials";
import { Video } from "@/types/video";
import { GetStaticProps } from "next";
import { readData } from "@/utils/read-data";
import HomeArticles from "@/components/home-articles";
import Logos from "@/components/logos/logo";

type Props = {
  videos: Video[];
};

const Home = ({ videos }: Props) => {
  return (
    <>
    <PageTransition>
      <Hero />
      <Logos/>
      <CoursesSection courses={courses} />
      <HomeArticles/>
      <VideosSection videos={videos} />
      <Testimonial />
    </PageTransition>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { videos } = await readData<{ videos: Video[] }>("data/videos.json");
  

  const props: Props = {
    videos
  };

  return {
    props,
  };
};
export default Home;
