import React from 'react'
import ArticleSection, {
  ArticleSectionActionList,
  ArticleSectionActionListItem,
  ArticleSectionBody,
  ArticleSectionHeading,
} from '@/app/blog/thailand-how-to-extend-a-tourist-visa-by-30-days/components/common/article-section'
import ArrowRightCircleIcon from '@/components/icon/arrow-right-circle-icon'

//region Entry

export default function WhatToExpectSection({ children }: { children: React.ReactNode }) {
  return <ArticleSection>{children}</ArticleSection>
}

//endregion

//region Text

export function WhatToExpectHeading({ children }: { children: React.ReactNode }) {
  return <ArticleSectionHeading>{children}</ArticleSectionHeading>
}

export function WhatToExpectBody({ children }: { children: React.ReactNode }) {
  return <ArticleSectionBody className="mt-8">{children}</ArticleSectionBody>
}

//endregion

//region Steps

export function WhatToExpectSteps({ children }: { children: React.ReactNode }) {
  return <ArticleSectionActionList>{children}</ArticleSectionActionList>
}

export function WhatToExpectStep({ children }: { children: React.ReactNode }) {
  return (
    <ArticleSectionActionListItem>
      <ArrowRightCircleIcon className="mt-0.5 size-5 flex-none text-emerald-600" />
      {children}
    </ArticleSectionActionListItem>
  )
}

//endregion
