from dataclasses import dataclass

@dataclass
class Opportunity:
        quote_number: str
        project_name: str
        project_category: str
        project_type: str
        type_code: str
        project_zip: str
        customer_list: list
        bid_due: str
        manager: str


        # quote = f'{self.quote_number} {self.manager} {self.project_name} {self.type_code}'

# quote = Opportunity(quote_number = "", project_name = "Test", project_category="",project_type="", type_code="", project_zip="", customer_list = [], bid_due="", manager="")
# print(quote.project_name)