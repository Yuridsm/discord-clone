import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
	nickname: string;
	isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
	return (
		<User>
			<Avatar className={ isBot ? 'bot' : '' } />

			<strong>{nickname}</strong>

			{isBot && <span>Bot</span>}
		</User>
	);
}

const UserList: React.FC = () => {
	return (
		<Container>
			<Role>Disponível - 1</Role>
			<UserRow nickname="Yuri Melo" />
			
			<Role>Offline - 22</Role>
			<UserRow nickname="Igor Melo" isBot/>
			<UserRow nickname="Coby Snider" />
			<UserRow nickname="Zane Camacho" />
			<UserRow nickname="Kenyon Glass" />
			<UserRow nickname="Oleg Schneider" />
			<UserRow nickname="Brock Murphy" />
			<UserRow nickname="Channing Lindsay" />
			<UserRow nickname="Emmanuel Obrien" />
			<UserRow nickname="Dalton Dejesus" />
			<UserRow nickname="Rajah Pugh" />
			<UserRow nickname="Kasper Roach" />
			<UserRow nickname="Kasper Roth" />
			<UserRow nickname="Dustin Myers" />
			<UserRow nickname="Vincent Dodson" />
			<UserRow nickname="Sebastian Poole" />
			<UserRow nickname="Curran Bray" />
			<UserRow nickname="Trevor Gomez" />
			<UserRow nickname="Odysseus Downs" />
			<UserRow nickname="August Clay" />
			<UserRow nickname="Buckminster Pollard" />
			<UserRow nickname="Abraham Oneil" />
			<UserRow nickname="Brett Hodges" />
			<UserRow nickname="Timon Atkinson" />
			<UserRow nickname="Tobias Morin" />
			<UserRow nickname="Aladdin Church" />
			<UserRow nickname="Francis Hampton" />
			<UserRow nickname="Porter Jarvis" />
			<UserRow nickname="Richard Mejia" />
			<UserRow nickname="Tanner Stark" />
			<UserRow nickname="Dane Burgess" />
			<UserRow nickname="Edan Gonzales" />
			<UserRow nickname="Forrest Hunter" />
			<UserRow nickname="Tate Mcknight" />
			<UserRow nickname="Herrod Robinson" />
			<UserRow nickname="James Woodard" />
			<UserRow nickname="Ciaran Alford" />
			<UserRow nickname="Clarke Roberson" />
			<UserRow nickname="Plato Duke" />
			<UserRow nickname="Drake Andrews" />
			<UserRow nickname="Noah Greer" />
			<UserRow nickname="Thane Hogan" />
			<UserRow nickname="Wang Boone" />
			<UserRow nickname="Kieran Clemons" />
			<UserRow nickname="Merrill Gray" />
			<UserRow nickname="Ivan Mercer" />
			<UserRow nickname="Nash Alvarez" />
			<UserRow nickname="Nicholas Middleton" />
			<UserRow nickname="Cody Frazier" />
			<UserRow nickname="Reuben Blankenship" />
			<UserRow nickname="Nigel Reilly" />
			<UserRow nickname="Chancellor Fitzgerald" />
			<UserRow nickname="Levi Harris" />
			<UserRow nickname="Logan Guerrero" />
			<UserRow nickname="Jelani Duncan" />
			<UserRow nickname="Garth Decker" />
			<UserRow nickname="Marshall Bowen" />
			<UserRow nickname="Tarik George" />
			<UserRow nickname="Colby Petty" />
			<UserRow nickname="John Mclean" />
			<UserRow nickname="Barry Diaz" />
			<UserRow nickname="Garrett Short" />
			<UserRow nickname="Deacon Peters" />
			<UserRow nickname="Joel Booker" />
			<UserRow nickname="Cain Fry" />
			<UserRow nickname="Paul Short" />
			<UserRow nickname="Alden Hogan" />
			<UserRow nickname="Hilel Abbott" />
			<UserRow nickname="Baker Harrell" />
			<UserRow nickname="Yasir Mcdonald" />
			<UserRow nickname="Kuame Randolph" />
			<UserRow nickname="Ross Mcintyre" />
			<UserRow nickname="Wing Dickson" />
			<UserRow nickname="Cadman Wilcox" />
			<UserRow nickname="Emery Mayo" />
			<UserRow nickname="Bevis Velazquez" />
			<UserRow nickname="Beck Potter" />
			<UserRow nickname="Brendan Glenn" />
			<UserRow nickname="Mohammad Tillman" />
			<UserRow nickname="Aladdin Hoffman" />
			<UserRow nickname="Brennan Vaughn" />
			<UserRow nickname="Stewart Nicholson" />
			<UserRow nickname="Jamal Davenport" />
			<UserRow nickname="Aidan Mcdaniel" />
			<UserRow nickname="Dale Adams" />
			<UserRow nickname="Galvin Stephens" />
			<UserRow nickname="Blake Case" />
			<UserRow nickname="Hunter Puckett" />
			<UserRow nickname="Patrick Hinton" />
			<UserRow nickname="Travis Morse" />
			<UserRow nickname="Dolan Cox" />
			<UserRow nickname="Ishmael Holmes" />
			<UserRow nickname="Kane Rodriquez" />
			<UserRow nickname="Eaton Williamson" />
			<UserRow nickname="Brent Marshall" />
			<UserRow nickname="Vincent Schwartz" />
			<UserRow nickname="Aquila Galloway" />
			<UserRow nickname="Jermaine Hood" />
			<UserRow nickname="Grady Tate" />
			<UserRow nickname="Wylie Sanders" />
			<UserRow nickname="Judah Snider" />
			<UserRow nickname="Joseph Fitzgerald" />
		</Container>
	);
}

export default UserList;
