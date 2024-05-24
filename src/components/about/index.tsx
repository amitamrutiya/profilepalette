/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="sm:px-20 sm:pb-20 px-5 pb-5 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-sm sm:text-md md:text-base  ">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
            <p className="font-semibold">
              My work and project tell me about more. 🧙‍♂️
            </p>
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
            Full Stack Web & App Devloper
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://drive.google.com/file/d/12MHSBjBiGtWHKhgAPfJjd4Yvv4N3BxQS/view"
            target="_blank"
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">Code Expert Solution</p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                  I work on a project which is based on
                  <b className="font-extrabold">Flutter</b> and
                  <b className="font-extrabold">NextJS.</b>
                </li>
                <li>
                  Finished half complete E-commerce platform for buy and sell
                  the clothes online
                </li>
                <li>
                  Implemented my <b className="font-extrabold">TypeScript</b>{" "}
                  and
                  <b className="font-extrabold"> Dart</b> knowledge to build the
                  client&apos;s project.
                </li>
              </ul>
              <p className="float-end font-semibold text-xs">
                December 2023 - May 2024
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://drive.google.com/file/d/1w34H0aUXMc136gVbCna7Sh-tntEL2jwm/view"
            target="_blank"
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">
                Google Summer of Code
                <span className="font-semibold text-base">@CCExtractor</span>
              </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                  Contributed to the
                  <b className="font-extrabold"> Flood Mobile </b> project
                  within the CCExtractor organization.
                </li>
                <li>
                  Utilized <b className="font-extrabold">Flutter</b> and
                  <b className="font-extrabold"> Dart</b> for development.
                </li>
                <li>
                  Made <b className="font-extrabold">100+ commits</b> and
                  implemented <b className="font-extrabold">15+ </b>new
                  features.
                </li>
                <li>Released a new Flood Mobile app on the Play Store.</li>
              </ul>
              <p className="float-end font-semibold text-xs">
                May 2023 - September 2023
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://drive.google.com/file/d/17bNi84LrxCNu1Dc1Y7Sq4VcRJ0YRaJ8i/view"
            target="_blank"
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">
                Prelax Infotech
                <span className="font-semibold text-base">Gujarat</span>
              </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                  Prelax Infotech is an ISO-9001-certified company that was
                  established in 2013.
                </li>
                <li>
                  I learned two app development technologies:- Flutter and Dart.
                </li>
                <li>
                  I work on a project which is based on
                  <b className="font-extrabold">Flutter</b>.
                </li>
                <li>
                  Actively participated in a Flutter project over two months.
                </li>
              </ul>
              <p className="float-end font-semibold text-xs">
                May 2022 - July 2022
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=amitamrutiya&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="AmitAmrutiya"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=amitamrutiya&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="AmitAmrutiya"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,ai,babel,bootstrap,css,docker,dart,discord,express,figma,firebase,flutter,git,github,githubactions,graphql,go,html,htmx,js,jquery,kubernetes,linux,mongodb,netlify,nextjs,nodejs,postman,prisma,react,redis,redux,replit,sass,tailwind,threejs,ts,vercel,vite,vscode`}
            alt="AmitAmrutiya"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=amitamrutiya&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="AmitAmrutiya"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/amitamrutiya/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=amitamrutiya&repo=MeetnChat&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="AmitAmrutiya"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
