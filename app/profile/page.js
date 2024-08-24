import React from 'react'
import DashBoard from '@/components/Dashboard'
import Loader from '@/components/Loader'
import { Suspense } from 'react'

const Profile = () => {
  return (
    <>
      <Suspense fallback={<Loader />} >
        <DashBoard />
      </Suspense>
    </>
  )
}

export default Profile

export const metadata = {
  title : "Profile | Get Me A Chai"
}