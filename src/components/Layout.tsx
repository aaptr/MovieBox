import { useEffect, } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { RootState } from '@/redux/store'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'

export function Layout() {
  const { requestToken } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (requestToken) {
      window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:5173/login-confirmation`
    }
  }, [requestToken])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Container >
        <Main>
          <Outlet />
        </Main>
      </Container>
      <Footer />
    </div>
  )
}