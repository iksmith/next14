async function getReviews() {

    const db = new PocketBase('http://127.0.0.1:8090');
    const data = await db.records.getList('reviews', {page: 1, perPage: 30})
    return data?.items as any[]; // as any[] is a workaround for a TypeScript bug
 
}

export default async function ReviewsPage() {
    const reviews = await getReviews();

    return(
        <div className="">
            <div className="header">
                <h1>Reviews</h1>
            </div>
            <div className="reviewSection">
                {reviews.map((review) => {
                    return <Review key={review.ide} review={review} />
                })}
            </div>
        </div>
    );
}

function Review({ review }) {
    const { id, title, art, content, rating, created, createdBy } = review || {};

    return (
        <>
            <a href={`/reviews/${id}`}></a><div className="reviewCard">
                <div className="innerCard">
                    <div className="leftCard">
                        {art}
                    </div>
                    <div className="midCard">
                        <h2> {title} </h2>
                        <h5> {content} </h5>
                        <p><i> {createdBy}  </i></p>
                        <p><i> {created}  </i></p>
                    </div>
                    <div className="rightCard">
                        <p> {rating} </p>
                    </div>
                </div>
            </div>
        </>
    )
}