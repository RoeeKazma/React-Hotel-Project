import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const { data, loading, error } = useFetch("/hotels/countByCity?cities=newYork,TLV,rome,istanbul,Berlin")

  return (
    <>
      <div className="featured">
       {loading ? "Loading Please Wait..." : <><div className="featuredItem">
          <img
            className="featuredImg"
            src="https://cf.bstatic.com/xdata/images/city/540x270/856674.webp?k=70a9589c2f7d2fc175c3ac02c55702c2e433f588866756a394cddfe215170f38&o="
            alt=""
          />
          <div className="featuredTitles">
            <h1>New York</h1>
            <h2>{data[0]} Properties</h2>
          </div>
        </div>
        
        <div className="featuredItem">
          <img
            className="featuredImg"
            src="https://cf.bstatic.com/xdata/images/city/540x270/654844.webp?k=ee9b529a42aaec9a64ef03a359acbccd609aef1c0bba7014d57041d14817719b&o="
            alt=""
          />
          <div className="featuredTitles">
            <h1>Tel Aviv</h1>
            <h2>{data[1]} Properties</h2>
          </div>
        </div> </> }
      </div>

      <div className="featured">
        <div className="featuredItem">
          <img
            className="featuredImg"
            src="https://cf.bstatic.com/xdata/images/city/540x270/613104.webp?k=6e9fa0c6cb25472c6a843ddc1a14d93cf7a7306a4111a74052af94d75c69b03e&o="
            alt=""
          />
          <div className="featuredTitles">
            <h1>Rome</h1>
            <h2>{data[2]} Properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            className="featuredImg"
            src="https://cf.bstatic.com/xdata/images/city/540x270/654657.webp?k=89856fe34d0c79585591dfb571c096931beeea442ef9175f86cd9960ffb242dd&o="
            alt=""
          />
          <div className="featuredTitles">
            <h1>Istanbul</h1>
            <h2>{data[3]} Properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            className="featuredImg"
            src="https://cf.bstatic.com/xdata/images/city/540x270/972611.webp?k=ad717a318610993a0d25cc1938fc17106d7a07b3489b89e239489f5e943756dd&o="
            alt=""
          />
          <div className="featuredTitles">
            <h1>Berlin</h1>
            <h2>{data[4]} Properties</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
