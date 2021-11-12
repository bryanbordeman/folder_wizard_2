import sys
from create_opportunity import create_opportunity
# from zip_2_state import find_state

def main():
    print(create_log())
    sys.stdout.flush()

def create_log():
    quote = create_opportunity() # make Opportunty object
    # write Excel log 
    # state = find_state(int(quote.project_zip))
    

    return quote
    

if __name__ == "__main__":
    main()