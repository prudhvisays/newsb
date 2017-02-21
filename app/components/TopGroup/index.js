import React from 'react';
import Accordion from './Accordion';
const data = [
    {
      title: "One",
      content: `Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt
                mollit anim id est laborum.`
    }, {
      title: "Two",
      content: `Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt
                mollit anim id est laborum.`
    },{
      title: "Three",
      content: `Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt
                mollit anim id est laborum.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt
                mollit anim id est laborum.`
    }
  ];
export default class TopGroup extends React.Component { //eslint-disable-line
  render() {
    return (
      // <ul className="player">
      //   <TopList groupName={'Madhapur'} groupSales={'230'} badgeColor={'rgb(245, 37, 151)'} />
      //   <TopList groupName={'Ameerpet'} groupSales={'210'} badgeColor={'rgb(1, 189, 240)'} />
      //   <TopList groupName={'Kondapur'} groupSales={'180'} badgeColor={'#FCB150'} />
      //   <TopList groupName={'Gachibowli'} groupSales={'170'} badgeColor={'#f44336'} />
      //   <TopList groupName={'Dhilhsuk Nagar'} groupSales={'150'} badgeColor={'#FF9800'} />
      //   <TopList groupName={'Koti'} groupSales={'110'} badgeColor={'#FF5722'} />
      //   <TopList groupName={'Abids'} groupSales={'70'} badgeColor={'#009688'} />
      //   <TopList groupName={'Banjara Hills'} groupSales={'70'} badgeColor={'#00BCD4'} />
      //   <TopList groupName={'Jubilee Hills'} groupSales={'60'} badgeColor={'#7E57C2'} />
      // </ul>
      <Accordion data={data} />
    );
  }
}
