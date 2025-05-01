"use strict";
exports.__esModule = true;
var React = require("react");
var NavbarWrapper_1 = require("../components/ordinary/NavbarWrapper/NavbarWrapper");
var AllItemsContainer_1 = require("../containers/AllItemsContainer");
var react_router_1 = require("react-router");
var BlockTitle_1 = require("../components/simple/Navbar/BlockTitle/BlockTitle");
var react_redux_1 = require("react-redux");
var selectors_1 = require("../core/selectors");
var allItems_module_css_1 = require("../styles/allItems.module.css");
var ShowAllItemsBlock_1 = require("../components/ordinary/ShowAllItemsBlock/ShowAllItemsBlock");
var Footer_1 = require("../components/ordinary/Footer/Footer");
var Preloader_1 = require("../components/simple/Preloader/Preloader");
var rootActions_1 = require("../core/store/actions/rootActions");
var useState = React.useState;
var ItemsPage = function (props) {
    var allGroups = props.allGroups, loadedAllProducts = props.loadedAllProducts;
    var defaultValue = 'Уся кава';
    var _a = useState(false), isLoading = _a[0], setIsLoading = _a[1];
    var _b = useState(false), fetchDataWasCalled = _b[0], setFetchDataWasCalled = _b[1];
    var _c = useState(defaultValue), groupName = _c[0], setGroupName = _c[1];
    var _d = useState(false), groupId = _d[0], setGroupId = _d[1];
    var url = react_router_1.useParams().url;
    var dispatch = react_redux_1.useDispatch();
    /*
        const fetchData = async (fetchAll: boolean): Promise<any | false> => {
            try {
                if (fetchDataWasCalled || loadedAllProducts || !groupId) return false
    
                setFetchDataWasCalled(true)
    
                let result: false | CoffeeServer[]
    
                switch (fetchAll) {
                    case true: result = await coffeeService.getAllCoffee()
                    case false: result = await coffeeService.getCoffeeByGroupName(groupName)
                }
    
                console.log({ result })
                if (!result) return false
    
                const coffeeServerArray = coffeeServerToState(result)
    
                dispatch(setCoffeeProductToGroup(coffeeServerArray[0]))
            }
            catch (e) {
                setGroupName('Невдалося загрузити')
                console.log({ e })
            }
        }
    */
    React.useLayoutEffect(function () {
        var foundGroup = allGroups.find(function (i) { return i.url === url; });
        if (!!url) {
            if (!!foundGroup && 'url' in foundGroup) {
                setGroupName(foundGroup.name);
                setGroupId(foundGroup.groupId);
            }
        }
    }, [allGroups]);
    React.useEffect(function () {
        var foundGroup = allGroups.find(function (i) { return i.url === url; });
        if (!!foundGroup && foundGroup.products.length === 0 && groupName !== defaultValue && !fetchDataWasCalled) {
            setFetchDataWasCalled(true);
            setIsLoading(true);
            props.setCoffeeThunk(groupName, function () { setIsLoading(false); });
        }
    }, [groupName]);
    React.useEffect(function () {
        if (!url) {
            setGroupName(defaultValue);
            setGroupId(false);
        }
    }, [url]);
    React.useEffect(function () {
        if (!loadedAllProducts && !url && allGroups.length > 0) {
            console.log(allGroups.length);
            setIsLoading(true);
            props.setCoffeeThunk(undefined, function () { setIsLoading(false); });
        }
    }, [url, allGroups]);
    return React.createElement("div", { className: allItems_module_css_1["default"].wrapper },
        React.createElement(NavbarWrapper_1["default"], { black: true }),
        React.createElement("section", { className: allItems_module_css_1["default"].blockTitle },
            React.createElement(BlockTitle_1["default"], { title: groupName, text: "\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u0430\u0432\u0438" })),
        !!groupId ? React.createElement(AllItemsContainer_1["default"], { groupId: groupId }) : isLoading ? React.createElement(Preloader_1.PreloaderBlock, null) : React.createElement(AllItemsContainer_1["default"], null),
        React.createElement(ShowAllItemsBlock_1["default"], { title: "\u041F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u0443\u0441\u044E \u043A\u0430\u0432\u0443" }),
        React.createElement(Footer_1["default"], null));
};
var mapStateToProps = function (state) { return ({
    allGroups: selectors_1.getAllProductsGroups(state),
    loadedAllProducts: selectors_1.getLoadedAllProducts(state)
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, { setCoffeeThunk: rootActions_1.setCoffeeThunk })(ItemsPage);
