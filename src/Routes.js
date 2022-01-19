import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'

import Home from './pages/Home'
import Details from './pages/Details'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

function Routes() {
    const location = useLocation()
    const transitions = useTransition(location, {
        from: { opacity: 0, transform: 'translateY(50px)', position: 'absolute', left: '8px', right: '8px' },
        enter: { opacity: 1, transform: 'translateY(0)', position: 'absolute', left: '8px', right: '8px' },
        leave: { opacity: 0, transform: 'translateY(50px)', position: 'absolute', left: '8px', right: '8px' },
    })

    return transitions((props, item) => (
        <animated.div style={props}>
            <Switch location={item}>
                <Route exact path='/' component={Home} />
                <Route path='/details/:id' component={Details} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </animated.div>
    ))
}

export default Routes
