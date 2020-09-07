import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
	const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

	/* Isso fará com que as mensagens ao serem caregadas em <Messages> sejam exibidas as últimas */
	useEffect(() => {
		const div = messagesRef.current;

		if(div) {
			div.scrollTop = div.scrollHeight;
		}
	}, [messagesRef]);

	return (
		<Container>
			<Messages ref={messagesRef}>
				<ChannelMessage
					author="Iran Melo"
					date="04/10/2021"
					content="Today is my birthday :)"
				/>
				<ChannelMessage
					author="Iran Melo"
					date="04/10/2021"
					content="Today is my birthday :)"
				/>
				<ChannelMessage
					author="Iran Melo"
					date="04/10/2021"
					content="Today is my birthday :)"
				/>
				<ChannelMessage
					author="Iran Melo"
					date="04/10/2021"
					content="Today is my birthday :)"
				/>
				<ChannelMessage
					author="Iran Melo"
					date="04/10/2021"
					content="Today is my birthday :)"
				/>
				<ChannelMessage
					author="Iran Melo"
					date="04/10/2021"
					content="Today is my birthday :)"
				/>
				<ChannelMessage
					author="Iran Melo"
					date="04/10/2021"
					content="Today is my birthday :)"
				/>
				<ChannelMessage
					author="Iran Melo"
					date="04/10/2021"
					content="Today is my birthday :)"
				/>
				<ChannelMessage
					author="Iran Melo"
					date="04/10/2021"
					content="Today is my birthday :)"
				/>
				<ChannelMessage
					author="Iran Melo"
					date="04/10/2021"
					content="Today is my birthday :)"
				/>
				<ChannelMessage
					author="Iran Melo"
					date="04/10/2021"
					content="Today is my birthday :)"
				/>
				<ChannelMessage
					author="Iran Melo"
					date="04/10/2021"
					content="Today is my birthday :)"
				/>
				<ChannelMessage
					author="Iran Melo"
					date="04/10/2021"
					content="Today is my birthday :)"
				/>
				<ChannelMessage
					author="Iran Melo"
					date="04/10/2021"
					content="Today is my birthday :)"
				/>
				<ChannelMessage
					author="Iran Melo"
					date="04/10/2021"
					content="Today is my birthday :)"
				/>


				<ChannelMessage
					author="Yuri Melo"
					date="04/10/2021"
					content={<><Mention>@Iran Melo</Mention>, me siga no Twitter viado, @Eu_YuriMelo</>}
					hasMention
					isBot
				/>
			</Messages>

			<InputWrapper>
				<Input type="text" placeholder="Conversando em #chat-livre" />
				<InputIcon />
			</ InputWrapper>
		</Container>
	);
}

export default ChannelData;
