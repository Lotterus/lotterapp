
const user = {
    id: 0,
    first_name: "test", // Done this way because of postgres.
    last_name: "user",
    email: 'user@test.com',
    phone_num: "555-555-5555", // Might use?
    // Needs to be 5 + power. No idea the range but needs to be checked.
    // No dups.
    // Should probably start with powerball since it's state wide
    winning_nums: [10, 37, 25, 1, 7], 
    mega: 14,
    zipcode: 95051,
    groups: [],
    photo_url: 'https://motherboard-images.vice.com/content-images/article/34338/146497043336844.jpg',
    session_id: null,
    password: 'test',
}
exports = {
    user,
}