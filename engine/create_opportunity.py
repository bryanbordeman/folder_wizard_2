import sys
from folder_wizard_2 import Opportunity

def main():
    create_opportunity()

def create_opportunity():
    project_name = sys.argv[1]
    project_category = sys.argv[2]
    project_type = sys.argv[3]
    type_code = sys.argv[4]
    manager = sys.argv[5]
    project_zip = sys.argv[6]
    due_date = sys.argv[7]
    customers = sys.argv[8]
    quote_number = sys.argv[9]
    directory = sys.argv[10]

    quote = Opportunity()
    quote.quote_number = quote_number
    quote.project_name = project_name
    quote.project_category = project_category
    quote.project_type = project_type
    quote.type_code = type_code
    quote.project_zip = project_zip
    quote.bid_due = due_date
    quote.customer_list = customers
    quote.manager = manager
    quote.directory = directory

    return quote

if __name__ == "__main__":
    main()