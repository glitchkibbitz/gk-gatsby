import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  place-content: start;
`

export const StyledFullScreenWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  overflow: scroll;
  background: rgb(74 32 32 / 35%);
  padding: 0;
`

export const StyledContentCenterWrapper = styled.div`
  display: flex;
  text-align: center;
  color: #ccc;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const StyledContentWrapperLeft = styled(StyledContentCenterWrapper)`
  max-width: 960px;
  margin: auto 53% auto auto;
`

export const StyledImageWrapper = styled.div`
  max-width: ${props => props.maxWidth || 300}px;
  margin: 0 auto 1.45rem;
`

export const StyledLink = styled(Link)`
  margin-left: 0.32rem;
`
