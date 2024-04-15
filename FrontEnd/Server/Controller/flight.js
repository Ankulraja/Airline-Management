const Flight = require("../Model/Flight");

exports.createFlightData = async (req, res) => {
  try {
    const {
      flightName,
      flightFrom,
      flightTo,
      departureTime,
      arrivalTime,
      flightMode,
      economicalFare,
      premiumFare,
      businessFare,
    } = req.body;

    if (
      !flightName ||
      !flightFrom ||
      !flightTo ||
      !departureTime ||
      !arrivalTime ||
      !businessFare ||
      !premiumFare | !flightMode ||
      !economicalFare
    ) {
      return res.status(401).json({
        success: false,
        message: "Fill all fields",
      });
    }
    console.log("2");

    const date = await Flight.create({
      flightName,
      flightFrom,
      flightTo,
      departureTime,
      arrivalTime,
      flightMode,
      economicalFare,
      premiumFare,
      businessFare,
    });
    console.log("4");

    return res.status(200).json({
      success: true,
      message: "Flight Data added successfully",
      date,
    });
  } catch (e) {
    // console.log("error of creating flight",e)
    return res.status(401).json({
      success: false,
      message: "Error while adding flight Data",
    });
  }
};

exports.modifyFlightData = async (req, res) => {
  try {
    const {
      flightId,
      flightName,
      flightFrom,
      flightTo,
      departureTime,
      arrivalTime,
      flightMode,
      economicalFare,
      premiumFare,
      businessFare,
    } = req.body;

    if (
      !flightId ||
      !flightName ||
      !flightFrom ||
      !flightTo ||
      !departureTime ||
      !arrivalTime ||
      !businessFare ||
      !premiumFare | !flightMode ||
      !economicalFare
    ) {
      return res.status(401).json({
        success: false,
        message: "Fill all fields",
      });
    }
    console.log("2");

    const date = await Flight.findByIdAndUpdate(
      flightId,
      {
        flightName,
        flightFrom,
        flightTo,
        departureTime,
        arrivalTime,
        flightMode,
        economicalFare,
        premiumFare,
        businessFare,
      },
      { new: true }
    );
    console.log("4");

    return res.status(200).json({
      success: true,
      message: "Flight Data added successfully",
      date,
    });
  } catch (e) {
    // console.log("error of creating flight",e)
    return res.status(401).json({
      success: false,
      message: "Error while adding flight Data",
    });
  }
};

exports.getAllFlightData = async (req, res) => {
  try {
    const response = await Flight.find({});
    return res.status(200).json({
      success: true,
      message: "All flight Data found",
      response,
    });
  } catch (e) {
    return res.status(200).json({
      success: false,
      message: "Error in Searching flight Data",
    });
  }
};

exports.deleteFlightData = async (req, res) => {
  try {
    const { flightId } = req.body;
    console.log("1", flightId);
    if (!flightId) {
      return res.status(200).json({
        success: false,
        message: "Id is Missing of deleting flight Data",
      });
    }
    const result = await Flight.findByIdAndDelete({ _id: flightId });
    return res.status(200).json({
      success: true,
      result,
      message: "Flight deleted successfully",
    });
  } catch (e) {
    return res.status(200).json({
      success: false,
      message: "Error while deleting the flight",
    });
  }
};

exports.searchFlightData = async (req, res) => {
  try {
    const { flightFrom, flightTo } = req.body;
    console.log("1")
    if (!flightFrom || !flightTo)
      return res.status(401).json({
        success: false,
        message: "Please Fill all required fields",
      });
    console.log("2")

    const result = await Flight.find({ flightFrom, flightTo });
    if (!result)
      return res.status(402).json({
        success: false,
        message: "Flight Route Not Present",
      });
    console.log("3")

    return res.status(200).json({
      success: true,
      result,
      message: "Flight Found",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error while finding flight",
    });
  }
};
