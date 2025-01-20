type CompanyID = string & { readonly brand: unique symbol };
type OrderID = string & { readonly brand: unique symbol };
type UserID = string & { readonly brand: unique symbol };

function queryForUser(id: UserID) {
  //
}

function CompanyID(id: string) {
  return id as CompanyID;
}

function UserID(id: string) {
  return id as UserID;
}

function OrderID(id: string) {
  return id as OrderID;
}

const id = OrderID('asdf')
const userId1 = UserID('asdf');
const companyID1 = CompanyID('jmads');

queryForUser(userId1);