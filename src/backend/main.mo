import List "mo:core/List";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";

actor {
  type RoomType = {
    #deluxe;
    #premium;
  };

  type Enquiry = {
    guestName : Text;
    email : Text;
    phoneNumber : Text;
    checkInDate : Text;
    checkOutDate : Text;
    roomType : RoomType;
    numberOfGuests : Nat;
    message : Text;
  };

  module Enquiry {
    let compare = Text.compare;
    public func compareByGuestName(enquiry1 : Enquiry, enquiry2 : Enquiry) : Order.Order {
      compare(enquiry1.guestName, enquiry2.guestName);
    };
  };

  let enquiries = List.empty<Enquiry>();

  public shared ({ caller }) func submitEnquiry(
    guestName : Text,
    email : Text,
    phoneNumber : Text,
    checkInDate : Text,
    checkOutDate : Text,
    roomType : RoomType,
    numberOfGuests : Nat,
    message : Text,
  ) : async () {
    let enquiry : Enquiry = {
      guestName;
      email;
      phoneNumber;
      checkInDate;
      checkOutDate;
      roomType;
      numberOfGuests;
      message;
    };
    enquiries.add(enquiry);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.toArray().sort(Enquiry.compareByGuestName);
  };
};
