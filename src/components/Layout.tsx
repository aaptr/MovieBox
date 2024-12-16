import { useEffect, } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'


export function Layout() {
  const { requestToken } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (requestToken) {
      const authURL = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:5173/approved`
      window.location.href = authURL
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