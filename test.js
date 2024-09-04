import users from "./users.js";
import { interestedPlayers, mastersDegree, nationality} from "./solutions.js";

interestedPlayers(users);
interestedPlayers({});
interestedPlayers(null);
interestedPlayers(undefined);

// users staying in Germany

nationality(users);
nationality({});
nationality(null);
nationality(undefined);

// users with masters Degree

mastersDegree(users)
mastersDegree({})
mastersDegree(null)
mastersDegree(undefined)

