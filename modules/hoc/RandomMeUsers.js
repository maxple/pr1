import DataComponent from './DataComponent'
import PeopleList from './PeopleList'

const RandomMeUsers = DataComponent(
    PeopleList,
    'https://randomuser.me/api?results=10',
)

export default RandomMeUsers
