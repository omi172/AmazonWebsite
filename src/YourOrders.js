import SearchIcon from '@mui/icons-material/Search';
import Tabs from './Tabs.js'
function YourOrders(){
    return (
        <div className="container">
            <div className="header_search">
                <h3>YoursOrder</h3>
                <input className="header_searchInput" type="text" placeholder='Search Your Order' />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div>
                <Tabs />
            </div>
        </div>
    );
}
export default YourOrders;