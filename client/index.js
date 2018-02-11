const normalDate = document.getElementById('normal');
const unixTime = document.getElementById('unix');
const natural = document.getElementById('natural-result');
const unix = document.getElementById('unix-result');

const months = {
	'01': 'January',
	'02': 'February',
	'03': 'March',
	'04': 'April',
	'05': 'May',
	'06': 'June',
	'07': 'July',
	'08': 'August',
	'09': 'September',
	'10': 'October',
	'11': 'November',
	'12': 'December'
};

const getTimestamps = async query => {
	const { data } = await axios.get(query);

	natural.textContent = data.natural || 'Invalid input';
	unix.textContent = data.unix || 'Invalid input';
};

const handleNormal = async () => {
	const input = normalDate.value.split('-');
	const month = months[input[1]];
	const day = input[2];
	const year = input[0];

	getTimestamps(`/${month} ${day}, ${year}`);
};

const handleUnix = () => getTimestamps(unixTime.value);