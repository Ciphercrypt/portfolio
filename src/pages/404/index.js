import './index.css'

const NotFound = () => (
    <div className="not-found">
        <div className="not-found__inner">
            <p className="not-found__code">404</p>
            <h1 className="not-found__title">page not found</h1>
            <p className="not-found__desc">
                this page doesn't exist. maybe you mistyped the url,
                or maybe i never built it.
            </p>
            <a href="/portfolio/" className="btn btn--primary">go home</a>
        </div>
    </div>
)

export default NotFound
