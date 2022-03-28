// Styled components imports
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../utils/styled-components/globalStyles"
import { theme } from "../utils/styled-components/theme"

// React Query imports
import { QueryClient, QueryClientProvider } from "react-query"

import { ReactQueryDevtools } from "react-query/devtools"

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
      <ReactQueryDevtools initialOpen={true} position="bottom-right" />
    </QueryClientProvider>
  )
}

export default MyApp
