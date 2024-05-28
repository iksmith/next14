
async function getReview(reviewId: string) {
    const res = await fetch(
       ` http://127.0.0.1:8090/api/collections/reviews/records/${reviewId}`, 
        {
            next: { revalidate: 10 },
        }
    );

    const data = await res.json();
    return data;

}

export default async function ReviewPage({ params }: any) {
    const note = await getReview(params.id);
    
    return (
        <div>
            <h1>reviews/{note.id}</h1>
            <div className='reviews'>
                <div className="left">review.</div>
                <div>{review.art}</div>
                <h3>{review.title}</h3>
                <p>{review.content}</p>
                <p>{review.createdBy}</p>
                <p>{review.rating}</p>
            </div>
        </div>
    );
}