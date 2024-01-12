import React from 'react';
import SectionWrapper from '@/app/components/section_wrapper/section_wrapper';
import SectionHeader from '@/app/components/section_header/section_header';

function About() {
  return(
    <SectionWrapper id="section-about" type="secondary">
      {/* Heading */}
      <SectionHeader
        number={1}
        heading="About me"
      />

      <div className="space-y-6">
        {/* Main text */}
        <p className="text-cutty-sark dark:text-aths-special text-sm font-light">
          I have been working as a Software Engineer full time for 7 years, and throughout that time I have amassed a
          diverse set of knowledge along with some very keen problem solving skills. Predominantly my experience has
          been with developing native mobile applications, more specifically, Android applications, however I
          additionally have a good and thorough knowledge over the whole stack, including some very keen design skills.
          <br/><br/>
          I love working with meaning projects and seeing the impact that my work has on the users/customers that I have
          worked with.
          <br/><br/>
          Outside of development, I love to keep fit, and I am a very keen traveller. To date, I have visited just over
          twenty countries, and I have lived in four different countries, spanning two continents.
        </p>

        {/* Technologies list */}
        <p className="font-medium text-cutty-sark dark:text-aths-special">Technologies I&apos;m passionate about</p>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-16 text-cutty-sark dark:text-aths-special text-sm font-light">
          {/* Languages */}
          <div>
            <ul>
              <li>&gt; Kotlin</li>
              <li>&gt; Java</li>
              <li>&gt; TypeScript</li>
            </ul>
          </div>

          {/* Frameworks */}
          <div>
            <ul>
              <li>&gt; Android</li>
              <li>&gt; ReactJS</li>
              <li>&gt; NextJS</li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <ul>
              <li>&gt; Git</li>
              <li>&gt; Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default About;