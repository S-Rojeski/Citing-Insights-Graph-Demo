import Base64Image from './Base64Image';


const mockConfig = {
  GOOGLE_CLIENT_ID: 'test-id',
};

const mockConfigurations = {
  primaryColor: '#000000',
  secondaryColor: '#FFFFFF',
  images: {
    img: {
      data: 'test-base64-string',
    },
  },
};

const mockUser = {
  name: 'test-user',
};

const mockResponse = {
  accessToken: 'test-token',
};



  it('should render the Base64Image component with the correct props', () => {
    expect(wrapper.find(Base64Image).length).toBe(1);
    expect(wrapper.find(Base64Image).prop('imageBase64String')).toBe(mockConfigurations.images.img.data);
  });

  it('should handle Google Login failure', () => {
    const onFailure = wrapper.instance().onFailure;
    console.log = jest.fn();
    onFailure('test-error');
    expect(console.log).toHaveBeenCalledWith('test-error');
  });
