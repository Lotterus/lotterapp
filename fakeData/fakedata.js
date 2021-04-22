const groupOne = {
    group_name: 'some group',
}

const user = {
    first_name: "test", // Done this way because of postgres.
    last_name: "user",
    phone_num: "555-555-5555", // Might use?
    // Needs to be 5 + power. No idea the range but needs to be checked.
    // No dups.
    winning_nums: [10, 37, 25, 1, 7], 
    mega: 14,
    groups: []
}
exports = {
    user,
}