// ==== Subsystems ====

const createFlightService = () => ({
    bookFlight: () => console.log('✈️ Flight booked to destination!'),
    cancelFlight: () => console.log('✈️ Flight booking cancelled.'),
  })
  
  const createHotelService = () => ({
    reserveHotel: () => console.log('🏨 Hotel reserved for the trip.'),
    cancelHotel: () => console.log('🏨 Hotel reservation cancelled.'),
  })
  
  const createInsuranceService = () => ({
    activateInsurance: () => console.log('🛡️ Travel insurance activated.'),
    deactivateInsurance: () => console.log('🛡️ Travel insurance deactivated.'),
  })
  
  const createGearRentalService = () => ({
    rentGear: () => console.log('🎒 Adventure gear rented.'),
    returnGear: () => console.log('🎒 Adventure gear returned.'),
  })
  
  // ==== Facade ====
  
  const createAdventureTripFacade = () => {
    const flight = createFlightService()
    const hotel = createHotelService()
    const insurance = createInsuranceService()
    const gear = createGearRentalService()
  
    return {
      startTrip: () => {
        console.log('\n🚀 Starting adventure trip...')
        flight.bookFlight()
        hotel.reserveHotel()
        insurance.activateInsurance()
        gear.rentGear()
      },
      endTrip: () => {
        console.log('\n🏁 Ending adventure trip...')
        gear.returnGear()
        insurance.deactivateInsurance()
        hotel.cancelHotel()
        flight.cancelFlight()
      },
    }
  }
  
  // ==== Usage ====
  
  const myAdventure = createAdventureTripFacade()
  
  myAdventure.startTrip()
  // ... enjoy your journey 🌍 ...
  myAdventure.endTrip()