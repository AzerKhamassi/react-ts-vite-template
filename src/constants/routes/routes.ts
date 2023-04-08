import React from 'react'
import { Home } from '../../pages'

interface RouteType {
    path: string,
    component: React.FC
}

const routes: RouteType[] = [{
    path: '/', component: Home
}]


export default routes