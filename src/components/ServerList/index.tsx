import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerLit: React.FC = () => {
	return (
		<Container>
			<ServerButton isHome />

			<Separator />

			<ServerButton />
			<ServerButton hasNotifications />
			<ServerButton mentions={3} />
			<ServerButton />
			<ServerButton />
			<ServerButton />
			<ServerButton />
			<ServerButton mentions={37} />
			<ServerButton />
			<ServerButton hasNotifications />
			<ServerButton />
		</ Container>
	);
};

export default ServerLit;