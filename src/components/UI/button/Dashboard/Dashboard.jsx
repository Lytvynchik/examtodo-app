import Viewlist from "./Viewlist";


const Dashboard = () => {
    return (
        <div className="Dashboard">
            <button className="Dashboard__btn" style={{marginRight: '16px', background: 'transparent', border: 'none', cursor: 'pointer'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill="#2F69FF" />
                </svg>
            </button>
            <Viewlist />
        </div>
    );
};

export default Dashboard;