import styled, { css } from 'styled-components'

export const StyledContainer = styled.div`
  padding: 0 2rem;
`

export const StyledMain = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledAnchorCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

export const StyledFooter = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;

  & a {
    ${StyledAnchorCss}
  }
`

export const StyledSpanLogo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`

export const StyledTitleAnchorCss = css`
  color: #0070f3;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`

export const StyledTitleDescriptionCss = css`
  text-align: center;
`

export const StyledTitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;

  ${StyledTitleDescriptionCss}

  & a {
    ${StyledTitleAnchorCss}
  }
`

export const StyledDescription = styled.p`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;

  ${StyledTitleDescriptionCss}
`

export const StyledCode = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`

export const StyledGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`

export const StyledCardAnchorHeadingCss = css`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`

export const StyledCardAnchorParagraphCss = css`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`

export const StyledCardAnchor = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  & h2 {
    ${StyledCardAnchorHeadingCss}
  }
  
  & p {
    ${StyledCardAnchorParagraphCss}
  }
`
