import Row from "../Row/Row";
import styles from "../../Rows/Row/Row";
import Request from "../../../Utils/requests";
import fetchdata from "../../../Utils/fetchData";

function RowList() {
  return (
    <>
      <section className={styles.all_movies_container}>
        {fetchdata.map((properties, index) => (
          <>
            <Row
              title={properties.title}
              fetchUrl={properties.fetchUrl}
              isSmall={properties.isSmall}
              key={index}
            />
            
          </>
        ))}
        <Row
          fetchUrl={Request.fetchTrending}
          title="Trending New"
          isSmall={false}
        />
        <Row
          fetchUrl={Request.fetchTopRated}
          title="Top Rated"
          isSmall={true}
        />
        <Row
          fetchUrl={Request.fetchAction}
          title="Action  Movies"
          isSmall={true}
        />
        <Row
          fetchUrl={Request.fetchComedyMovie}
          title="Comedy Movies"
          isSmall={true}
        />
        <Row
          fetchUrl={Request.fetchDocumentaries}
          title="Documentary Movies"
          isSmall={true}
        />
        <Row
          fetchUrl={Request.fetchHorrorMovie}
          title="Horror Movies"
          isSmall={true}
        />
      </section>
    </>
  );
}

export default RowList;

//      fetchUrl: ,
//      title: "Romance Movies",
//      isSmall: true,
//    },
//    {
//      fetchUrl: Request.fetchAnima,
//      title: "Animation",
//      isSmall: true,
//    },
//  ];
// export default fetchdata;
