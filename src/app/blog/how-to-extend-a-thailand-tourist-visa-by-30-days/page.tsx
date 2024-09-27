import ContentContainer from "@/components/ui/content-container";
import IntroductionSection
  , {
  IntroductionBody,
  IntroductionPreface,
  IntroductionPreTitle,
  IntroductionTitle
} from "@/app/blog/how-to-extend-a-thailand-tourist-visa-by-30-days/components/introduction-section";
import WhatYouNeedSection
  , {
  WhatYouNeedBody, WhatYouNeedChecklist, WhatYouNeedChecklistItem,
  WhatYouNeedTitle
} from "@/app/blog/how-to-extend-a-thailand-tourist-visa-by-30-days/components/what-you-need-section";
import WhereToGoSection
  , {
  WhereToGoBody, WhereToGoLink,
  WhereToGoTitle
} from "@/app/blog/how-to-extend-a-thailand-tourist-visa-by-30-days/components/where-to-go-section";

//region Model

const itemsNeeded = [
  {
    label: "Passport.",
    description: "Make sure to bring your passport or the travel document you used when you first entered Thailand."
  },
  {
    label: "1,900 THB.",
    description: "There’s a fee of 1,900 Thai Baht for the extension, which must be paid in cash—no other payment methods are accepted. I personally brought 2,000 THB and received 100 THB back in change."
  },
  {
    label: "Your photograph.",
    description: "You’ll need a physical photo of yourself (digital won’t work), similar to the one used in your passport. The required size is 4 cm x 6 cm. You can get one at a local photography store, or there may be a service near the immigration office. I chose a local store, paid 100 THB for four photos, and waited about 30 minutes."
  },
  {
    label: "Passport photocopies.",
    description: "You’ll need two photocopies: one of the photo/personal details page in your passport and one of the page with your entry stamp. Like with your photo, you can get these at a local shop or near the immigration office. I went to a local store, and the two copies cost me 100 THB."
  },
  {
    label: "Application form.",
    description: "You’ll fill out the application form in person at the immigration office. It’s made up of three parts (three separate documents). Be prepared to provide your address in Thailand, phone number (Thai if you have one), your date and port of arrival, and basic personal details—though I imagine most of this won’t require much preparation. I also recommend bringing your own pen, just in case."
  }
]

//endregion

//region Entry

export default function HowToExtendAThailandTouristVisaBy30Days() {
  return (
    <main className="flex-grow">
      <ContentContainer className="py-32">
        <article>
          <IntroductionSection>
            <IntroductionPreTitle>
              A guide on
            </IntroductionPreTitle>
            <IntroductionTitle>
              How To Extend A Thailand Tourist Visa By 30 Days
            </IntroductionTitle>
            <IntroductionPreface>
              If, like me, you&apos;ve recently taken advantage of Thailand&apos;s 60-day visa exemption or 60-day Visa
              on Arrival, you might now be wondering how to extend your stay by an additional 30 days. If so,
              you&apos;ve come to the right place.
            </IntroductionPreface>
            <IntroductionBody>
              I&apos;d like to start by noting that immigration offices may vary slightly depending on their location
              and specific procedures. So, where it&apos;s relevant, the information I&apos;m sharing here is based on
              my personal experience of extending my 60-day visa exemption in Bangkok.
            </IntroductionBody>
          </IntroductionSection>

          <WhatYouNeedSection>
            <WhatYouNeedTitle>
              What you need
            </WhatYouNeedTitle>
            <WhatYouNeedChecklist>
              {itemsNeeded.map((item => (
                <WhatYouNeedChecklistItem key={item.label}>
                  <span>
                    <strong className="font-semibold text-stone-900">{item.label}</strong> {item.description}
                  </span>
                </WhatYouNeedChecklistItem>
              )))}
            </WhatYouNeedChecklist>
            <WhatYouNeedBody>
              Once you’ve got everything ready, you can approach the immigration assistants at your chosen office.
            </WhatYouNeedBody>
          </WhatYouNeedSection>

          <WhereToGoSection>
            <WhereToGoTitle>
              Where to go
            </WhereToGoTitle>
            <WhereToGoBody>
              <span>
                Some online sources suggest you can visit any immigration office in Thailand, which sounds convenient.
                However, I’m not convinced this is always the case. While at the immigration office myself, I overheard
                a couple who were trying to extend their visa but were turned away because they had arrived in a
                different province and planned to stay there for their entire trip. Based on this, I recommend
                visiting the immigration office in the province where you plan to stay if you’re in a similar situation.
                {"\n"}{"\n"}
                Once you know the province where you want to extend your visa, you can locate your local immigration
                office, also known as the Immigration Bureau. There are several locations, which can make it a bit
                confusing, but for Bangkok, I recommend visiting the immigration office at{' '}
                <WhereToGoLink href="https://maps.app.goo.gl/dqNeEgV4n6CV31sH7">IT Square</WhereToGoLink>
                , listed on Google Maps as “Immigration Office - Short-term VISA”.
                {"\n"}{"\n"}
                For other provinces, I suggest searching “Immigration Bureau” on Google Maps and checking the reviews.
                The reviews will give you an idea of whether others have successfully extended their visas at that
                location.
              </span>
            </WhereToGoBody>
          </WhereToGoSection>
        </article>
      </ContentContainer>
    </main>
  )
}

//endregion