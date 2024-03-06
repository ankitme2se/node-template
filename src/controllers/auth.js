export const user = (req, res) => {
    res.status(201).json({
        success: true,
        data: 'User Registered Successfuly',
    });
};
